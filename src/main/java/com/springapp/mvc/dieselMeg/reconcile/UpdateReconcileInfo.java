package com.springapp.mvc.dieselMeg.reconcile;

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
@RequestMapping("/update_reconcile_info")
public class UpdateReconcileInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            //            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("tracdt") String tracdt,
            @RequestParam("plate") String plate,
            @RequestParam("price") Float price,
            @RequestParam("wvmon") Float wvmon,
            @RequestParam("account") Float account,
            @RequestParam("dispt") Float dispt,
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

            String sql = "update car.diesel_reconcile set " +
                    "tracdt=?, plate=?, price=?, wvmon=?, account=?, dispt=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            java.sql.Date sql_tracdt = null;
            if (tracdt!= null && tracdt.length() > 2)
                sql_tracdt = java.sql.Date.valueOf(tracdt);
            pst.setDate(1, sql_tracdt);
            pst.setString(2, plate);
            pst.setFloat(3,  price);
            pst.setFloat(4,  wvmon);
            pst.setFloat(5,  account);
            pst.setFloat(6,  dispt);
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