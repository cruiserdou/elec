package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/main")
public class MainController {
    @RequestMapping(method = RequestMethod.POST)
    public String toMainpage(ModelMap model,
                             @RequestParam("account") String account,
                             @RequestParam("password") String login_password
    ) {
        //数据库取出用户信息比对获取浏览器发送的信息
        /*Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;


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
            stmt = conn.createStatement();

            String sql = "select password from busi.tb_user where user_nm = '" + account + "'";

            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                if (rs.getString(1).equals(login_password))
                    return "main";
            }


        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return "index";*/
        if (account.equals("abc@123.com") && login_password.equals("123"))
            return "main";
        else
            return "index";
    }
}