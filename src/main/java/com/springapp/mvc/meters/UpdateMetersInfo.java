package com.springapp.mvc.meters;

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
@RequestMapping("/update_meters_info")
public class UpdateMetersInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id,
            @RequestParam("meternum") String meternum,
            @RequestParam("custid") Integer custid,
            @RequestParam("custname") String custname,
            @RequestParam("box") String box,
            @RequestParam("model") String model,
            @RequestParam("lastuesd") Float lastuesd,
            @RequestParam("entry") String entry,
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

            String sql = "update work.meters set " +
                    "meternum=?, custid=?, custname=?, box=?, model=?, lastuesd=?, " +
                    "       entry=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, meternum);
            pst.setInt(2, custid);
            pst.setString(3, custname);
            pst.setString(4, box);
            pst.setString(5, model);
            pst.setFloat(6, lastuesd);
            java.sql.Date sql_entry = null;
            if (entry!= null && entry.length() > 2)
                sql_entry = java.sql.Date.valueOf(entry);
            pst.setDate(7, sql_entry);
            pst.setString(8, remark);
            pst.setInt(9, id);
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