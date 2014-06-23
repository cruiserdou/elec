package com.springapp.mvc.repairs;

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
@RequestMapping("/update_repairs_info")
public class UpdateRepairsInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("garage") String garage,
            @RequestParam("arriveddt") String arriveddt,
            @RequestParam("estimatedt") String estimatedt,
            @RequestParam("practicaldt") String practicaldt,
            @RequestParam("arrivedper") String arrivedper,
            @RequestParam("repairper") String repairper,
            @RequestParam("fees") Float fees,
            @RequestParam("costs") Float costs,
            @RequestParam("type") String type,
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

            String sql = "update car.repairs set " +
                    "plate=?, arriveddt=?, estimatedt=?, practicaldt=?, arrivedper=?," +
                    " repairper=?, fees=?, costs=?, type=?, remark=?, garage=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            java.sql.Date sql_arriveddt = null;
            if (arriveddt!= null && arriveddt.length() > 2)
                sql_arriveddt = java.sql.Date.valueOf(arriveddt);
            pst.setDate(2, sql_arriveddt);
            java.sql.Date sql_estimatedt = null;
            if (estimatedt!= null && estimatedt.length() > 2)
                sql_estimatedt = java.sql.Date.valueOf(estimatedt);
            pst.setDate(3, sql_estimatedt);
            java.sql.Date sql_practicaldt = null;
            if (practicaldt!= null && practicaldt.length() > 2)
                sql_practicaldt = java.sql.Date.valueOf(practicaldt);
            pst.setDate(4, sql_practicaldt);
            pst.setString(5, arrivedper);
            pst.setString(6, repairper);
            pst.setFloat(7, fees);
            pst.setFloat(8, costs);
            pst.setString(9, type);
            pst.setString(10, remark);
            pst.setString(11, garage);
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