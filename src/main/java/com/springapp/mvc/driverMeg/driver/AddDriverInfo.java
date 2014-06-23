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
@RequestMapping("/add_driver_info")
public class AddDriverInfo {

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

            String sql = "insert into car.driver" +
                    "( id, name, sex, birthday, addr, phone, tphone, card, drino, openo, escorno, atno, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, name);
            pst.setString(3, sex);
            java.sql.Date sql_birthday = null;
            if (birthday!= null && birthday.length() > 2)
                sql_birthday = java.sql.Date.valueOf(birthday);
            pst.setDate(4, sql_birthday);
            pst.setString(5, addr);
            pst.setString(6, phone);
            pst.setString(7, tphone);
            pst.setString(8, card);
            pst.setString(9, drino);
            pst.setString(10, openo);
            pst.setString(11, escorno);
            pst.setString(12, atno);
            pst.setString(13, remark);


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