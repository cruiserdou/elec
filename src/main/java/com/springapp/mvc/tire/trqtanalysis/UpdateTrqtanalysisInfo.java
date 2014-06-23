package com.springapp.mvc.tire.trqtanalysis;

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
@RequestMapping("/update_trqtanalysis_info")
public class UpdateTrqtanalysisInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("spec") String spec,
            @RequestParam("tartan") String tartan,
            @RequestParam("tyreno") String tyreno,
            @RequestParam("scrap") String scrap,
            @RequestParam("numbers") Integer numbers,
            @RequestParam("price") Float price,
            @RequestParam("costs") Float costs,
            @RequestParam("useml") Float useml,
            @RequestParam("ditchml") Float ditchml,
            @RequestParam("contrate") Float contrate,
            @RequestParam("repairnum") Integer repairnum,
            @RequestParam("convoynum") Integer convoynum,
            @RequestParam("service") Float service,
            @RequestParam("presnum") Integer presnum,
            @RequestParam("uesmonth") Float uesmonth,
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

            String sql = "update car.qt_analysis set " +
                    " spec=?, tartan=?, tyreno=?, scrap=?, numbers=?, price=?, " +
                    "       costs=?, useml=?, ditchml=?, contrate=?, repairnum=?, convoynum=?, " +
                    "       service=?, presnum=?, uesmonth=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, spec);
            pst.setString(2, tartan);
            pst.setString(3, tyreno);
            pst.setString(4, scrap);
            pst.setInt(5, numbers);
            pst.setFloat(6,  price);
            pst.setFloat(7,  costs);
            pst.setFloat(8,  useml);
            pst.setFloat(9,  ditchml);
            pst.setFloat(10,  contrate);
            pst.setInt(11, repairnum);
            pst.setInt(12, convoynum);
            pst.setFloat(13,  service);
            pst.setInt(14, presnum);
            pst.setFloat(15,  uesmonth);
            pst.setString(16, remark);
            pst.setString(17, id);


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