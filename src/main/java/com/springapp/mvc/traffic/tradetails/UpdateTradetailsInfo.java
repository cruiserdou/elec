package com.springapp.mvc.traffic.tradetails;

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
@RequestMapping("/update_tradetails_info")
public class UpdateTradetailsInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("tracdt") String tracdt,
            @RequestParam("load") String load,
            @RequestParam("loadtg") Float loadtg,
            @RequestParam("unload") String unload,
            @RequestParam("unloadtg") Float unloadtg,
            @RequestParam("loss") Float loss,
            @RequestParam("gets") Float gets,
            @RequestParam("tolls") Float tolls,
            @RequestParam("bonus") Float bonus,
            @RequestParam("penalty") Float penalty,
            @RequestParam("repair") Float repair,
            @RequestParam("park") Float park,
            @RequestParam("freight") Float freight,
            @RequestParam("base") Float base,
            @RequestParam("alimony") Float alimony,
            @RequestParam("realwg") Float realwg,
            @RequestParam("realft") Float realft,
            @RequestParam("driver") String driver,
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

            String sql = "update car.traffic_details set " +
                    " tracdt=?, load=?, unload=?, unloadtg=?, loss=?, gets=?," +
                    " tolls=?, bonus=?, penalty=?, repair=?, park=?, freight=?, base=?," +
                    "  alimony=?, driver=?, remark=?, realwg=?, realft=?, loadtg=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            java.sql.Date sql_tracdt= null;
            if (tracdt!= null && tracdt.length() > 2)
                sql_tracdt = java.sql.Date.valueOf(tracdt);
            pst.setDate(1, sql_tracdt);
            pst.setString(2, load);
            pst.setString(3, unload);
            pst.setFloat(4, unloadtg);
            pst.setFloat(5, loss);
            pst.setFloat(6, gets);
            pst.setFloat(7, tolls);
            pst.setFloat(8, bonus);
            pst.setFloat(9, penalty);
            pst.setFloat(10, repair);
            pst.setFloat(11, park);
            pst.setFloat(12, freight);
            pst.setFloat(13, base);
            pst.setFloat(14, alimony);
            pst.setString(15, driver);
            pst.setString(16, remark);
            pst.setFloat(17, realwg);
            pst.setFloat(18, realft);
            pst.setFloat(19, loadtg);
            pst.setString(20, id);


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