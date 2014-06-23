package com.springapp.mvc.tire.trqtanalysis;

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
@RequestMapping("/add_trqtanalysis_info")
public class AddTrqtanalysisInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("spec") String spec,
            @RequestParam("tartan") String tartan,
            @RequestParam("tyreno") String tyreno,
            @RequestParam("scrap") String scrap,
            @RequestParam("numbers") Integer numbers,
            @RequestParam("price") Float price,
            @RequestParam("costs") Float costs,
            @RequestParam("useml") Float useml,
            @RequestParam("ditchml") Float ditchml,
            @RequestParam("contrate") Float contrate,
            @RequestParam("repairnum") Integer repairnum,
            @RequestParam("convoynum") Integer convoynum,
            @RequestParam("service") Float service,
            @RequestParam("presnum") Integer presnum,
            @RequestParam("uesmonth") Float uesmonth,
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

            String sql = "insert into car.qt_analysis" +
                    "(id, spec, tartan, tyreno, scrap, numbers, price, costs, useml," +
                    "   ditchml, contrate, repairnum, convoynum, service," +
                    "     presnum, uesmonth, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, spec);
            pst.setString(3, tartan);
            pst.setString(4, tyreno);
            pst.setString(5, scrap);
            pst.setInt(6, numbers);
            pst.setFloat(7,  price);
            pst.setFloat(8,  costs);
            pst.setFloat(9,  useml);
            pst.setFloat(10,  ditchml);
            pst.setFloat(11,  contrate);
            pst.setInt(12, repairnum);
            pst.setInt(13, convoynum);
            pst.setFloat(14,  service);
            pst.setInt(15, presnum);
            pst.setFloat(16,  uesmonth);
            pst.setString(17, remark);


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