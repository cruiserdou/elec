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
@RequestMapping("/update_fees_info")
public class UpdateFeesInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
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

            String sql = "update work.fees set " +
                    "meterid=?, meternum=?, custid=?, custname=?, typeid=?,typename=?,  " +
                    "  price=?, readdate=?, lastuesd=?, currentuesd=?, should=?,remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, meterid);
            pst.setString(2, meternum);
            pst.setInt(3, custid);
            pst.setString(4, custname);
            pst.setInt(5, typeid);
            pst.setString(6, typename);
            pst.setFloat(7, price);
            java.sql.Date sql_readdate = null;
            if (readdate!= null && readdate.length() > 2)
                sql_readdate = java.sql.Date.valueOf(readdate);
            pst.setDate(8, sql_readdate);
            pst.setFloat(9, lastuesd);
            pst.setFloat(10, currentuesd);
            pst.setFloat(11, should);
            pst.setString(12, remark);
            pst.setInt(13, id);
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