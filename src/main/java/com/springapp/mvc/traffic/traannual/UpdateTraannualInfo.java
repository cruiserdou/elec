package com.springapp.mvc.traffic.traannual;

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
@RequestMapping("/update_traannual_info")
public class UpdateTraannualInfo {

    @RequestMapping(value = "{user_id}", method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("team") String team,
            @RequestParam("annualdt") Date annualdt,
            @RequestParam("expiredt") Date expiredt,
            @RequestParam("fees") Number fees,
            @RequestParam("handling") String handling,
            @RequestParam("remark") String remark
            ) throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
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

            String sql = "update car.traffic_annual set " +
                    "plate=?, team=?, annualdt=?, expiredt=?, fees=?, handling=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            pst.setString(2, team);
            pst.setDate(3, (java.sql.Date) annualdt);
            pst.setDate(4, (java.sql.Date) expiredt);
            pst.setDouble(5, (Double) fees);
            pst.setString(6, handling);
            pst.setString(7, remark);
            pst.setString(8, id);


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