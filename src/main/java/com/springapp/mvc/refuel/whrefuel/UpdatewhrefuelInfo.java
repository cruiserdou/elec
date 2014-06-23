package com.springapp.mvc.refuel.whrefuel;

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
@RequestMapping("/update_whrefuel_info")
public class UpdatewhrefuelInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("oil") String oil,
            @RequestParam("type") String type,
            @RequestParam("price") Float price,
            @RequestParam("fuel") Float fuel,
            @RequestParam("pay") Float pay,
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

            String sql = "update car.warehouse_refuel set " +
                    "plate=?, oil=?, type=?, price=?, fuel=?, handling=?, remark=?, pay=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            java.sql.Date sql_oil = null;
            if (oil!= null && oil.length() > 2)
                sql_oil = java.sql.Date.valueOf(oil);
            pst.setDate(2, sql_oil);
            pst.setString(3, type);
            pst.setFloat(4, price);
            pst.setFloat(5, fuel);
            pst.setString(6, handling);
            pst.setString(7, remark);
            pst.setFloat(8, pay);
            pst.setString(9, id);

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