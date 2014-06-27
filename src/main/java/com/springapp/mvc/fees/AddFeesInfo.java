package com.springapp.mvc.fees;

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
@RequestMapping("/add_fees_info")
public class AddFeesInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            @RequestParam("meterid") Integer meterid,
            @RequestParam("meternum") String meternum,
            @RequestParam("custid") Integer custid,
            @RequestParam("custname") String custname,
            @RequestParam("typeid") Integer typeid,
            @RequestParam("typename") String typename,
            @RequestParam("price") Float price,
            @RequestParam("readdate") String readdate,
            @RequestParam("lastuesd") Float lastuesd,
            @RequestParam("currentuesd") Float currentuesd,
            @RequestParam("should") Float should,
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

            String sql = "insert into work.fees" +
                    "(id, meterid, meternum, custid, custname, typeid, typename," +
                    "       price, readdate, lastuesd, currentuesd, should, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


            pst = conn.prepareStatement(sql);
            pst.setInt(1, id);
            pst.setInt(2, meterid);
            pst.setString(3, meternum);
            pst.setInt(4, custid);
            pst.setString(5, custname);
            pst.setInt(6, typeid);
            pst.setString(7, typename);
            pst.setFloat(8, price);
            java.sql.Date sql_readdate = null;
            if (readdate!= null && readdate.length() > 2)
                sql_readdate = java.sql.Date.valueOf(readdate);
            pst.setDate(9, sql_readdate);
            pst.setFloat(10, lastuesd);
            pst.setFloat(11, currentuesd);
            pst.setFloat(12, should);
            pst.setString(13, remark);
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