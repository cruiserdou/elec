package com.springapp.mvc.purchase;

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
@RequestMapping("/update_purchase_info")
public class UpdatePurchaseInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("tracdt") String tracdt,
            @RequestParam("plate") String plate,
            @RequestParam("tonnage") Float tonnage,
            @RequestParam("dest") String dest,
            @RequestParam("orders") Float orders,
            @RequestParam("price") Float price,
            @RequestParam("loans") Float loans,
            @RequestParam("remit") Float remit,
            @RequestParam("balance") Float balance,
            @RequestParam("spare") Float spare,
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

            String sql = "update car.purchase set " +
                    " tracdt=?, plate=?, tonnage=?, dest=?, orders=?, price=?," +
                    " loans=?, remit=?, remark=?, balance=?, spare=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            java.sql.Date sql_tracdt = null;
            if (tracdt!= null && tracdt.length() > 2)
                sql_tracdt = java.sql.Date.valueOf(tracdt);
            pst.setDate(1, sql_tracdt);
            pst.setString(2, plate);
            pst.setFloat(3, tonnage);
            pst.setString(4, dest);
            pst.setFloat(5, orders);
            pst.setFloat(6, price);
            pst.setFloat(7, loans);
            pst.setFloat(8, remit);
            pst.setString(9, remark);
            pst.setFloat(10, balance);
            pst.setFloat(11, spare);
            pst.setString(12, id);

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