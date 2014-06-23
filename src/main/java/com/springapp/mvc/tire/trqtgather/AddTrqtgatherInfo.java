package com.springapp.mvc.tire.trqtgather;

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
@RequestMapping("/add_trqtgather_info")
public class AddTrqtgatherInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("fleet") String fleet,
            @RequestParam("brand") String brand,
            @RequestParam("model") String model,
            @RequestParam("spec") String spec,
            @RequestParam("tartan") String tartan,
            @RequestParam("tyreno") String tyreno,
            @RequestParam("price") Float price,
            @RequestParam("isnum") String isnum,
            @RequestParam("dispart") String dispart,
            @RequestParam("ditchml") Float ditchml,
            @RequestParam("scrap") String scrap,
            @RequestParam("useml") Float useml,
            @RequestParam("repairnum") Integer repairnum,
            @RequestParam("convoynum") Integer convoynum,
            @RequestParam("service") Float service,
            @RequestParam("ditch") String ditch,
            @RequestParam("presnum") Integer presnum,
            @RequestParam("install") String install,
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

            String sql = "insert into car.qt_gather" +
                    "(id, fleet, brand, model, spec, tartan, tyreno, price, isnum, " +
                    "   dispart, ditchml, scrap, useml, repairnum, convoynum, service," +
                    "   ditch, presnum, install, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, fleet);
            pst.setString(3, brand);
            pst.setString(4, model);
            pst.setString(5, spec);
            pst.setString(6, tartan);
            pst.setString(7, tyreno);
            pst.setFloat(8, price);
            pst.setString(9, isnum);
            java.sql.Date sql_dispart = null;
            if (dispart!= null && dispart.length() > 2)
                sql_dispart = java.sql.Date.valueOf(dispart);
            pst.setDate(10, sql_dispart);
            pst.setFloat(11, ditchml);
            pst.setString(12, scrap);
            pst.setFloat(13, useml);
            pst.setInt(14,  repairnum);
            pst.setInt(15,  convoynum);
            pst.setFloat(16, service);
            pst.setString(17, ditch);
            pst.setInt(18, presnum);
            java.sql.Date sql_install = null;
            if (install!= null && install.length() > 2)
                sql_install = java.sql.Date.valueOf(install);
            pst.setDate(19, sql_install);
            pst.setString(20, remark);


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