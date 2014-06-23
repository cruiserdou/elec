package com.springapp.mvc.carMeg.enter;

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
@RequestMapping("/update_enter_info")
public class UpdateEnterInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("dept") String dept,
            @RequestParam("users") String users,
            @RequestParam("driver") String driver,
            @RequestParam("condition") String condition,
            @RequestParam("parks") Float parks,
            @RequestParam("tolls") Float tolls,
            @RequestParam("mileage") Float mileage,
            @RequestParam("cause") String cause,
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

            String sql = "update car.enter_car set " +
                    "dept=?, users=?, driver=?, condition=?, parks=?, tolls=?," +
                    "       mileage=?, cause=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, dept);
            pst.setString(2, users);
            pst.setString(3, driver);
            pst.setString(4, condition);
            pst.setFloat(5, parks);
            pst.setFloat(6, tolls);
            pst.setFloat(7, mileage);
            pst.setString(8, cause);
            pst.setString(9, remark);
            pst.setString(10, id);


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