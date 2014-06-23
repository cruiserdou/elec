package com.springapp.mvc.carMeg.outward;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_outward_info")
public class AddOutwardInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("dept") String dept,
            @RequestParam("users") String users,
            @RequestParam("usedt") String usedt,
            @RequestParam("estimatedt") String estimatedt,
            @RequestParam("pernum") Integer pernum,
            @RequestParam("cause") String cause,
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

            String sql = "insert into car.outward_car" +
                    "(id, dept, users, usedt, estimatedt, pernum, cause, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, dept);
            pst.setString(3, users);
            java.sql.Date sql_usedt = null;
            if (usedt!= null && usedt.length() > 2)
                sql_usedt = java.sql.Date.valueOf(usedt);
            pst.setDate(4,  sql_usedt);
            java.sql.Date sql_estimatedt = null;
            if (estimatedt!= null && estimatedt.length() > 2)
                sql_estimatedt = java.sql.Date.valueOf(estimatedt);
            pst.setDate(5,  sql_estimatedt);
            pst.setInt(6, pernum);
            pst.setString(7, cause);
            pst.setString(8, remark);


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