package com.springapp.mvc.users;

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
@RequestMapping("/update_users_info")
public class UpdateUsersInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            @RequestParam("username") String username,
            @RequestParam("password") String pwd,
            @RequestParam("sex") String sex,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("address") String address,
            @RequestParam("state") Integer state,
            @RequestParam("entry") String entry,
            @RequestParam("deptid") Integer deptid,
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

            String sql = "update work.users set " +
                    "username=?, password=?, sex=?, email=?, phone=?, address=?, " +
                    "       state=?, entry=?, deptid=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, username);
            pst.setString(2, pwd);
            pst.setString(3, sex);
            pst.setString(4, email);
            pst.setString(5, phone);
            pst.setString(6, address);
            pst.setInt(7, state);
            java.sql.Date sql_entry = null;
            if (entry!= null && entry.length() > 2)
                sql_entry = java.sql.Date.valueOf(entry);
            pst.setDate(8, sql_entry);
            pst.setInt(9, deptid);
            pst.setString(10, remark);
            pst.setInt(11, id);
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