package com.springapp.mvc.custs;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.ConvertToList;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_custs_info")
public class ObtainCustsInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "custname", required = false) String custname
//            @RequestParam(value = "card", required = false) String card
  ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;



        DataShop dataShop = new DataShop();
        List list = new ArrayList();

        try{
            Class.forName("org.postgresql.Driver").newInstance();
        }catch (Exception e){
            System.out.print(e.getMessage());
        }
        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        try{
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();



            String sql = "select * from work.custs WHERE 1 = 1 ";
            if (custname != null && custname.length() != 0)
                sql += " and custname like '%" + custname + "%'";
//            if (card != null && card.length() != 0)
//                sql += " and post like '%" + card + "%'";
//            if (lnk_addr != null && lnk_addr.length() != 0)
//                sql += " and lnk_addr like '%" + lnk_addr + "%'";
//            if (bank_branch_nm != null && bank_branch_nm.length() != 0)
//                sql += " and bank_branch_nm like '%" + bank_branch_nm + "%'";
//            if (level != null && level.length() != 0)
//                sql += " and level like '%" + level + "%'";
//            if (phone != null && phone.length() != 0)
//                sql += " and m_phone like '%" + phone + "%'";
//            if (remark != null && remark.length() != 0)
//                sql += " and remark like '%" + remark + "%'";
//            if (contact != null && contact.length() != 0)
//                sql += " and contact like '%" + contact + "%'";
//            if (area != null && area.length() != 0)
//                sql += " and area like '%" + area + "%'";
//            if (unittel != null && unittel.length() != 0)
//                sql += " and t_phone like '%" + unittel + "%'";
//            if (bank_id != null && bank_id.length() != 0)
//                sql += " and bank_id like '%" + bank_id + "%'";

            rs = stmt.executeQuery(sql);

            list = new ConvertToList().convertList(rs);

        }catch (SQLException e){
            System.out.print(e.getMessage());
        }finally {
            try{
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            }catch (SQLException e){
                System.out.print(e.getMessage());
            }
        }

        dataShop.setSuccess(true);
        dataShop.setList(list);

        return dataShop;
    }
}