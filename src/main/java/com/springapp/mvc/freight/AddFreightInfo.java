package com.springapp.mvc.freight;

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
@RequestMapping("/add_freight_info")
public class AddFreightInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("tracdt") String tracdt,
            @RequestParam("plate") String plate,
            @RequestParam("load") String load,
            @RequestParam("tonnage") Float tonnage,
            @RequestParam("loss") Float loss,
            @RequestParam("price") Float price,
            @RequestParam("loans") Float loans,
            @RequestParam("remit") Float remit,
            @RequestParam("balance") Float balance,
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

            String sql = "insert into car.freight" +
                    "(id, tracdt, plate, load, tonnage, loss, price, loans, remit, remark,balance) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            java.sql.Date sql_tracdt = null;
            if (tracdt!= null && tracdt.length() > 2)
                sql_tracdt = java.sql.Date.valueOf(tracdt);
            pst.setDate(2, sql_tracdt);
            pst.setString(3, plate);
            pst.setString(4, load);
            pst.setFloat(5,  tonnage);
            pst.setFloat(6,  loss);
            pst.setFloat(7,  price);
            pst.setFloat(8,  loans);
            pst.setFloat(9,  remit);
            pst.setString(10, remark);
            pst.setDouble(11,  balance);


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