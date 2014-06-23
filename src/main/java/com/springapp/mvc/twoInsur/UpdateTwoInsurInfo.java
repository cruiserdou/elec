package com.springapp.mvc.twoInsur;

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
@RequestMapping("/update_twoInsur_info")
public class UpdateTwoInsurInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @PathVariable String user_id,
            @RequestParam("id") String id,
            @RequestParam("plate") String plate,
            @RequestParam("trailer") String trailer,
            @RequestParam("jan") String jan,
            @RequestParam("janno") String janno,
            @RequestParam("feb") String feb,
            @RequestParam("febno") String febno,
            @RequestParam("mar") String mar,
            @RequestParam("marno") String marno,
            @RequestParam("apr") String apr,
            @RequestParam("aprno") String aprno,
            @RequestParam("may") String may,
            @RequestParam("mayno") String mayno,
            @RequestParam("jun") String jun,
            @RequestParam("junno") String junno,
            @RequestParam("jul") String jul,
            @RequestParam("julno") String julno,
            @RequestParam("aug") String aug,
            @RequestParam("augno") String augno,
            @RequestParam("sep") String sep,
            @RequestParam("sepno") String sepno,
            @RequestParam("oct") String oct,
            @RequestParam("octno") String octno,
            @RequestParam("nov") String nov,
            @RequestParam("novno") String novno,
            @RequestParam("decs") String decs,
            @RequestParam("decno") String decno,
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

            String sql = "update car.two_insur set " +
                    "plate=?, trailer=?, jan=?, janno=?, feb=?, febno=?, mar=?, " +
                    "       marno=?, apr=?, aprno=?, may=?, mayno=?, jun=?, junno=?, jul=?, " +
                    "       julno=?, aug=?, augno=?, sep=?, sepno=?, oct=?, octno=?, nov=?," +
                    "       novno=?, decs=?, decno=?, remark=?" +
                    "where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, plate);
            pst.setString(2, trailer);
            pst.setString(3, jan);
            pst.setString(4, janno);
            pst.setString(5, feb);
            pst.setString(6, febno);
            pst.setString(7, mar);
            pst.setString(8, marno);
            pst.setString(9, apr);
            pst.setString(10, aprno);
            pst.setString(11, may);
            pst.setString(12, mayno);
            pst.setString(13, jun);
            pst.setString(14, junno);
            pst.setString(15, jul);
            pst.setString(16, julno);
            pst.setString(17, aug);
            pst.setString(18, augno);
            pst.setString(19, sep);
            pst.setString(20, sepno);
            pst.setString(21, oct);
            pst.setString(22, octno);
            pst.setString(23, nov);
            pst.setString(24, novno);
            pst.setString(25, decs);
            pst.setString(26, decno);
            pst.setString(27, remark);
            pst.setString(28, id);

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