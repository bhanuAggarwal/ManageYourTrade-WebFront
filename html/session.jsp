<%@ page import="java.io.*,java.util.*" %>
<%
	String type = request.getParameter("type");
	String value = request.getParameter("value");
	//out.print(type + " : " + value);
	if(type.equals("logout")){
		session.invalidate();
			out.print("Successfull");
	}
	else if(type.equals("rm")){
		session.setAttribute("rm_id", value);
	}
	else if(type.equals("am")){
		session.setAttribute("am_id", value);
	}
	else if(type.equals("tsi")){
		session.setAttribute("tsi_id", value);
	}
	else if(type.equals("ca")){
		session.setAttribute("ca_id", value);
	}
	else if(type.equals("dealer")){
		session.setAttribute("dealer_id", value);
	}
	else if(type.equals("company")){
		session.setAttribute("company_id", value);
		out.print("Company Id Added to Session " + value);
	}
	else if(type.equals("superAdmin")){
		session.setAttribute("superAdmin", value);
		out.print("Company Id Added to Session " + session.getAttribute("superAdmin"));
	}
%>