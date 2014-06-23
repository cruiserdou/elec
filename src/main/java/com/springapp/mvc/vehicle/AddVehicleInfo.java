package com.springapp.mvc.vehicle;

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
@RequestMapping("/add_vehicle_info")
public class AddVehicleInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("trailer") String trailer,
            @RequestParam("model") String model,
            @RequestParam("spec") String spec,
            @RequestParam("engineno") String engineno,
            @RequestParam("chassisno") String chassisno,
            @RequestParam("maindri") String maindri,
            @RequestParam("copilot") String copilot,
            @RequestParam("respons") String respons,
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

            String sql = "insert into car.vehicle" +
                    "( id, plate, trailer, model, spec, engineno, chassisno, maindri, " +
                    "            copilot, respons, remark) " +
                    " values(?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, id);
            pst.setString(2, plate);
            pst.setString(3, trailer);
            pst.setString(4, model);
            pst.setString(5, spec);
            pst.setString(6, engineno);
            pst.setString(7, chassisno);
            pst.setString(8, maindri);
            pst.setString(9, copilot);
            pst.setString(10, respons);
            pst.setString(11, remark);

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