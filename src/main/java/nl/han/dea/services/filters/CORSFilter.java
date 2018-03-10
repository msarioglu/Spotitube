package nl.han.dea.services.filters;

import nl.han.dea.datasource.PlaylistDAO;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.Filter;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(filterName = "CORSFilter", urlPatterns = "*")

public class CORSFilter implements Filter {

    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(CORSFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //implemented init method
    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        LOGGER.debug("Request" + request.getMethod());

        HttpServletResponse resp = (HttpServletResponse) servletResponse;
        resp.addHeader("Access-Control-Allow-Origin","*");
        resp.addHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
        resp.addHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");

        if ("OPTIONS".equals(request.getMethod())) {
            resp.setStatus(HttpServletResponse.SC_OK);
            return;
        }
        chain.doFilter(request, servletResponse);
    }

    @Override
    public void destroy() {
        //implemented destroy method
    }
}