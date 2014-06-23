package com.springapp.mvc.driverMeg.driver;

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
@RequestMapping("/update_driver_info")
public class UpdateDriverInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("name") String name,
            @RequestParam("sex") String sex,
            @RequestParam("birthday") String birthday,
            @RequestParam("addr") String addr,
            @RequestParam("phone") String phone,
            @RequestParam("tphone") String tphone,
            @RequestParam("card") String card,
            @RequestParam("drino") String drino,
            @RequestParam("openo") String openo,
            @RequestParam("escorno") String escorno,
            @RequestParam("atno") String atno,
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

            String sql = "update car.driver set " +
                    "name=?, sex=?, birthday=?, addr=?, phone=?, tphone=?, card=?, \n" +
                    "       drino=?, openo=?, escorno=?, atno=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, name);
            pst.setString(2, sex);
            java.sql.Date sql_birthday = null;
            if (birthday!= null && birthday.length() > 2)
                sql_birthday = java.sql.Date.valueOf(birthday);
            pst.setDate(3, sql_birthday);
            pst.setString(4, addr);
            pst.setString(5, phone);
            pst.setString(6, tphone);
            pst.setString(7, card);
            pst.setString(8, drino);
            pst.setString(9, openo);
            pst.setString(10, escorno);
            pst.setString(11, atno);
            pst.setString(12, remark);
            pst.setString(13, id);

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