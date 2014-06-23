package com.springapp.mvc.accident;

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
@RequestMapping("/add_accident_info")
public class AddAccidentInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("file") String file,
            @RequestParam("plate") String plate,
            @RequestParam("driver") String driver,
            @RequestParam("condition") String condition,
            @RequestParam("results") String results,
            @RequestParam("occurred") String occurred,
            @RequestParam("happenplc") String happenplc,
            @RequestParam("repairplc") String repairplc,
            @RequestParam("duty") String duty,
            @RequestParam("amount") Float amount,
            @RequestParam("costs") Float costs,
            @RequestParam("pay") Float pay,
            @RequestParam("explain") String explain,
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

            String sql = "insert into car.accident" +
                    "(id, file, plate, driver, condition, results, occurred, happenplc, " +
                    "            repairplc, duty, amount, costs, pay, explain, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, file);
            pst.setString(3, plate);
            pst.setString(4, driver);
            pst.setString(5, condition);
            pst.setString(6, results);
            java.sql.Date sql_occurred = null;
            if (occurred!= null && occurred.length() > 2)
                sql_occurred = java.sql.Date.valueOf(occurred);
            pst.setDate(7, sql_occurred);
            pst.setString(8, happenplc);
            pst.setString(9, repairplc);
            pst.setString(10, duty);
            pst.setFloat(11, amount);
            pst.setFloat(12, costs);
            pst.setFloat(13, pay);
            pst.setString(14, explain);
            pst.setString(15, remark);
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