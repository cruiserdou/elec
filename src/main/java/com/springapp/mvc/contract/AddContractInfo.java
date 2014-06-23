package com.springapp.mvc.contract;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;

@Controller
@RequestMapping("/add_contract_info")
public class AddContractInfo {

    @RequestMapping(value = "{user_id}", method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("name") String name,
            @RequestParam("project") String project,
            @RequestParam("sign") Date sign,
            @RequestParam("remark") String remark

            ) throws Exception{
        DataShop dataShop = new DataShop();
        Connection conn = null;
        PreparedStatement pst = null;
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "insert into car.contract" +
                    "( id, name, project, sign, remark) " +
                    " values(?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, name);
            pst.setString(3, project);
            pst.setDate(4, (java.sql.Date) sign);
            pst.setString(5, remark);


            pst.executeUpdate();

            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return dataShop;
    }
}