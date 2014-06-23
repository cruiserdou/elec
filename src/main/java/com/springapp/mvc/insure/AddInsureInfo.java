package com.springapp.mvc.insure;

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
@RequestMapping("/add_insure_info")
public class AddInsureInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("policy") String policy,
            @RequestParam("effect") String effect,
            @RequestParam("company") String company,
            @RequestParam("costs") Float costs,
            @RequestParam("due") String due,
            @RequestParam("handling") String handling,
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

            String sql = "insert into car.insure" +
                    "(id, plate, policy, effect, company, costs, due, handling, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, plate);
            pst.setString(3, policy);
            java.sql.Date sql_effect = null;
            if (effect!= null && effect.length() > 2)
                sql_effect = java.sql.Date.valueOf(effect);
            pst.setDate(4, sql_effect);
            pst.setString(5, company);
            pst.setFloat(6, costs);
            java.sql.Date sql_due = null;
            if (due!= null && due.length() > 2)
                sql_due = java.sql.Date.valueOf(due);
            pst.setDate(7, sql_due);
            pst.setString(8, handling);
            pst.setString(9, remark);


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