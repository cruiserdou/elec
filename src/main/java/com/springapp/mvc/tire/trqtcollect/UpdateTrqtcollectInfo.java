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
@RequestMapping("/update_trqtcollect_info")
public class UpdateTrqtcollectInfo {

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

            String sql = "update car.qt_collect set " +
                    "fleet=?, brand=?, spec=?, tartan=?, tyreno=?, price=?," +
                    "       isnum=?, dispart=?, ditchml=?, scrap=?, useml=?, repairnum=?," +
                    "       convoynum=?, service=?, ditch=?, presnum=?, install=?, uesday=?," +
                    "       uesmonth=?, contrate=?, costs=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, fleet);
            pst.setString(2, brand);
            pst.setString(3, spec);
            pst.setString(4, tartan);
            pst.setString(5, tyreno);
            pst.setFloat(6, price);
            pst.setString(7, isnum);
            java.sql.Date sql_dispart = null;
            if (dispart!= null && dispart.length() > 2)
                sql_dispart = java.sql.Date.valueOf(dispart);
            pst.setDate(8, sql_dispart);
            pst.setFloat(9, ditchml);
            pst.setString(10, scrap);
            pst.setFloat(11, useml);
            pst.setInt(12, repairnum);
            pst.setInt(13, convoynum);
            pst.setFloat(14, service);
            pst.setString(15, ditch);
            pst.setInt(16, presnum);
            java.sql.Date sql_install = null;
            if (install!= null && install.length() > 2)
                sql_install = java.sql.Date.valueOf(install);
            pst.setDate(17, sql_install);
            pst.setFloat(18, uesday);
            pst.setFloat(19, uesmonth);
            pst.setFloat(20, contrate);
            pst.setFloat(21, costs);
            pst.setString(22, remark);
            pst.setString(23, id);


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