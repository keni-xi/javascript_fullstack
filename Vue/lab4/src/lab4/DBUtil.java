package lab4;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import lab4.Config;

public class DBUtil {
	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	/**
	 * �õ����ݿ�����
	 */
	public Connection getConnection() throws ClassNotFoundException,
			SQLException, InstantiationException, IllegalAccessException {
		// ͨ��Config��ȡ���ݿ�������Ϣ
		String driver = Config.getValue("driver");
		String url = Config.getValue("url");
		String user = Config.getValue("user");
		String pwd = Config.getValue("pwd");
		System.out.println("���Ӳ��Կ�ʼ��");
		try {
			// ָ����������
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// �������ݿ�����
			System.out.println(url +" "+ user +" "+ pwd);
			conn = DriverManager.getConnection(url, user, pwd);
		System.out.println("���ݿ����ӳɹ�!");
			return conn;
		} catch (Exception e) {
			// ������ӹ��̳����쳣���׳��쳣��Ϣ
			throw new SQLException("�������������ʧ�ܣ�");
		}
	}

	/**
	 * �ͷ���Դ
	 */
	public void closeAll() {
		// ���rs���գ��ر�rs
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		// ���pstmt���գ��ر�pstmt
		if (pstmt != null) {
			try {
				pstmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		// ���conn���գ��ر�conn
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * ִ��SQL��䣬���Խ��в�ѯ
	 */
	public ResultSet executeQuery(String preparedSql, String[] param) {
		// ����SQL,ִ��SQL
		try {
			// �õ�PreparedStatement����
			pstmt = conn.prepareStatement(preparedSql);
			if (param != null) {
				for (int i = 0; i < param.length; i++) {
					// ΪԤ����sql���ò���
					pstmt.setString(i + 1, param[i]);
				}
			}
			// ִ��SQL���
			rs = pstmt.executeQuery();
		} catch (SQLException e) {
			// ����SQLException�쳣
			e.printStackTrace();
		}
		return rs;
	}

	/**
	 * ִ��SQL��䣬���Խ�������ɾ���ĵĲ���������ִ�в�ѯ
	 */
	public int executeUpdate(String preparedSql, String[] param) {
		int num = 0;
		// ����SQL,ִ��SQL
		try {
			// �õ�PreparedStatement����
			pstmt = conn.prepareStatement(preparedSql);
			if (param != null) {
				for (int i = 0; i < param.length; i++) {
					// ΪԤ����sql���ò���
					pstmt.setString(i + 1, param[i]);
				}
			}
			// ִ��SQL���
			num = pstmt.executeUpdate();
		} catch (SQLException e) {
			// ����SQLException�쳣
			e.printStackTrace();
		}
		return num;
	}
}
