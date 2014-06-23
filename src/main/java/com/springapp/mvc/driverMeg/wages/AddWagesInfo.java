package com.springapp.mvc.driverMeg.wages;

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
@RequestMapping("/add_wages_info")
public class AddWagesInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("name") String name,
            @RequestParam("month") String month,
            @RequestParam("base") Float base,
            @RequestParam("merit") Float merit,
            @RequestParam("alimony") Float alimony,
            @RequestParam("penalty") Float penalty,
            @RequestParam("loan") Float loan,
            @RequestParam("extend") String extend,
            @RequestParam("reals") Float reals,
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

            String sql = "insert into car.wages" +
                    "(id, name, month, base, merit, alimony, penalty, loan, extend,  remark,reals) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, name);
            pst.setString(3, month);
            pst.setFloat(4, base);
            pst.setFloat(5, merit);
            pst.setFloat(6, alimony);
            pst.setFloat(7, penalty);
            pst.setFloat(8, loan);
            java.sql.Date sql_extend = null;
            if (extend!= null && extend.length() > 2)
                sql_extend = java.sql.Date.valueOf(extend);
            pst.setDate(9, sql_extend);
            pst.setString(10, remark);
            pst.setFloat(11, reals);


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