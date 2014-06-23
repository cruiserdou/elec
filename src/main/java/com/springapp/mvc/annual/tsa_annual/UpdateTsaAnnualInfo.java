package com.springapp.mvc.annual.tsa_annual;

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
@RequestMapping("/update_tsa_annual_info")
public class UpdateTsaAnnualInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("tsa") String tsa,
            @RequestParam("annualdt") String annualdt,
            @RequestParam("expiredt") String expiredt,
            @RequestParam("fees") Float fees,
            @RequestParam("handling") String handling,
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

            String sql = "update car.tsa_annual set " +
                    "plate=?, tsa=?, annualdt=?, expiredt=?, fees=?, handling=?, " +
                    " remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            pst.setString(2, tsa);
            java.sql.Date sql_annualdt = null;
            if (annualdt!= null && annualdt.length() > 2)
                sql_annualdt = java.sql.Date.valueOf(annualdt);
            pst.setDate(3, sql_annualdt);
            java.sql.Date sql_expiredt = null;
            if (expiredt!= null && expiredt.length() > 2)
                sql_expiredt = java.sql.Date.valueOf(expiredt);
            pst.setDate(4, sql_expiredt);
            pst.setFloat(5, fees);
            pst.setString(6, handling);
            pst.setString(7, remark);
            pst.setString(8, id);

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