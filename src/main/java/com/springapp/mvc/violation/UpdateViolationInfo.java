package com.springapp.mvc.violation;

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
@RequestMapping("/update_violation_info")
public class UpdateViolationInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("type") String type,
            @RequestParam("illegal") String illegal,
            @RequestParam("fine") Float fine,
            @RequestParam("deduct") Integer deduct,
            @RequestParam("driver") String driver,
            @RequestParam("place") String place,
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

            String sql = "update car.violation set " +
                    "plate=?, type=?, illegal=?, fine=?, deduct=?, driver=?, " +
                    "place=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            pst.setString(2, type);
            java.sql.Date sql_illegal = null;
            if (illegal!= null && illegal.length() > 2)
                sql_illegal = java.sql.Date.valueOf(illegal);
            pst.setDate(3, sql_illegal);
            pst.setFloat(4,fine);
            pst.setInt(5, deduct);
            pst.setString(6, driver);
            pst.setString(7, place);
            pst.setString(8, remark);
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