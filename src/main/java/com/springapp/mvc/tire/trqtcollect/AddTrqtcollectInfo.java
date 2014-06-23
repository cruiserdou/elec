package com.springapp.mvc.tire.trqtcollect;

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
@RequestMapping("/add_trqtcollect_info")
public class AddTrqtcollectInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("fleet") String fleet,
            @RequestParam("brand") String brand,
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
            @RequestParam("uesday") Float uesday,
            @RequestParam("uesmonth") Float uesmonth,
            @RequestParam("contrate") Float contrate,
            @RequestParam("costs") Float costs,
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

            String sql = "insert into car.qt_collect" +
                    "(id, fleet, brand, spec, tartan, tyreno, price, isnum, dispart," +
                    "            ditchml, scrap, useml, repairnum, convoynum, service, ditch," +
                    "            presnum, install, uesday, uesmonth, contrate, costs, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, fleet);
            pst.setString(3, brand);
            pst.setString(4, spec);
            pst.setString(5, tartan);
            pst.setString(6, tyreno);
            pst.setFloat(7, price);
            pst.setString(8, isnum);
            java.sql.Date sql_dispart = null;
            if (dispart!= null && dispart.length() > 2)
                sql_dispart = java.sql.Date.valueOf(dispart);
            pst.setDate(9, sql_dispart);
            pst.setFloat(10, ditchml);
            pst.setString(11, scrap);
            pst.setFloat(12, useml);
            pst.setInt(13, repairnum);
            pst.setInt(14, convoynum);
            pst.setFloat(15, service);
            pst.setString(16, ditch);
            pst.setInt(17, presnum);
            java.sql.Date sql_install = null;
            if (install!= null && install.length() > 2)
                sql_install = java.sql.Date.valueOf(install);
            pst.setDate(18, sql_install);
            pst.setFloat(19, uesday);
            pst.setFloat(20, uesmonth);
            pst.setFloat(21, contrate);
            pst.setFloat(22, costs);
            pst.setString(23, remark);


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