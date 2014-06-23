package com.springapp.mvc.refuel.outrefuel;

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
@RequestMapping("/add_outrefuel_info")
public class AddOutrefuelInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("station") String station,
            @RequestParam("oil") String oil,
            @RequestParam("type") String type,
            @RequestParam("payment") String payment,
            @RequestParam("cardno") String cardno,
            @RequestParam("price") Float price,
            @RequestParam("fuel") Float fuel,
            @RequestParam("pay") Float pay,
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

            String sql = "insert into car.out_refuel" +
                    "(id, plate, station, oil, type, payment, cardno, price, fuel, handling, remark,pay) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, plate);
            pst.setString(3, station);
            java.sql.Date sql_oil = null;
            if (oil!= null && oil.length() > 2)
                sql_oil = java.sql.Date.valueOf(oil);
            pst.setDate(4, sql_oil);
            pst.setString(5, type);
            pst.setString(6, payment);
            pst.setString(7, cardno);
            pst.setFloat(8, price);
            pst.setFloat(9, fuel);
            pst.setString(10, handling);
            pst.setString(11, remark);
            pst.setFloat(12, pay);


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