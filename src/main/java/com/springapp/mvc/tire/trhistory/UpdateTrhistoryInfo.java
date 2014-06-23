package com.springapp.mvc.tire.trhistory;

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
@RequestMapping("/update_trhistory_info")
public class UpdateTrhistoryInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            //            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("fleet") String fleet,
            @RequestParam("plate") String plate,
            @RequestParam("tirenum") Integer tirenum,
            @RequestParam("positions") String positions,
            @RequestParam("brand") String brand,
            @RequestParam("tyreno") String tyreno,
            @RequestParam("spec") String spec,
            @RequestParam("tartan") String tartan,
            @RequestParam("isnum") String isnum,
            @RequestParam("price") Float price,
            @RequestParam("origdp") Float origdp,
            @RequestParam("install") String install,
            @RequestParam("instdp") Float instdp,
            @RequestParam("instuseml") Float instuseml,
            @RequestParam("ditchml") Float ditchml,
            @RequestParam("dispart") String dispart,
            @RequestParam("dispartdp") Float dispartdp,
            @RequestParam("dispartml") Float dispartml,
            @RequestParam("disassem") String disassem,
            @RequestParam("scrap") String scrap,
            @RequestParam("repair") Float repair,
            @RequestParam("convoy") Float convoy,
            @RequestParam("pres") Float pres,
            @RequestParam("othservice") Float othservice,
            @RequestParam("ditchdp") Float ditchdp,
            @RequestParam("curwear") Float curwear,
            @RequestParam("curuseml") Float curuseml,
            @RequestParam("curcosts") Float curcosts,
            @RequestParam("mmvalue") Float mmvalue,
            @RequestParam("wear") Float wear,
            @RequestParam("forecastml") Float forecastml,
            @RequestParam("repairnum") Integer repairnum,
            @RequestParam("convoynum") Integer convoynum,
            @RequestParam("presnum") Integer presnum,
            @RequestParam("service") Float service,
            @RequestParam("ditch") String ditch,
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

            String sql = "update car.tire_history set " +
                    "fleet=?, plate=?, tirenum=?, positions=?, brand=?, tyreno=?, " +
                    "       spec=?, tartan=?, isnum=?, price=?, origdp=?, install=?, instdp=?, " +
                    "       instuseml=?, ditchml=?, dispart=?, dispartdp=?, dispartml=?, " +
                    "       disassem=?, scrap=?, repair=?, convoy=?, pres=?, othservice=?, " +
                    "       ditchdp=?, curwear=?, curuseml=?, curcosts=?, mmvalue=?, wear=?, " +
                    "       forecastml=?, repairnum=?, convoynum=?, presnum=?, service=?, " +
                    "       ditch=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, fleet);
            pst.setString(2, plate);
            pst.setInt(3, tirenum);
            pst.setString(4, positions);
            pst.setString(5, brand);
            pst.setString(6, tyreno);
            pst.setString(7, spec);
            pst.setString(8, tartan);
            pst.setString(9, isnum);
            pst.setFloat(10, price);
            pst.setFloat(11, origdp);
            java.sql.Date sql_install = null;
            if (install!= null && install.length() > 2)
                sql_install = java.sql.Date.valueOf(install);
            pst.setDate(12, sql_install);
            pst.setFloat(13, instdp);
            pst.setFloat(14, instuseml);
            pst.setFloat(15, ditchml);
            java.sql.Date sql_dispart = null;
            if (dispart!= null && dispart.length() > 2)
                sql_dispart = java.sql.Date.valueOf(dispart);
            pst.setDate(16, sql_dispart);
            pst.setFloat(17, dispartdp);
            pst.setFloat(18, dispartml);
            pst.setString(19, disassem);
            pst.setString(20, scrap);
            pst.setFloat(21, repair);
            pst.setFloat(22, convoy);
            pst.setFloat(23, pres);
            pst.setFloat(24, othservice);
            pst.setFloat(25, ditchdp);
            pst.setFloat(26, curwear);
            pst.setFloat(27, curuseml);
            pst.setFloat(28, curcosts);
            pst.setFloat(29, mmvalue);
            pst.setFloat(30, wear);
            pst.setFloat(31, forecastml);
            pst.setInt(32, repairnum);
            pst.setInt(33, convoynum);
            pst.setInt(34, presnum);
            pst.setFloat(35, service);
            pst.setString(36, ditch);
            pst.setString(37, remark);
            pst.setString(38, id);


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