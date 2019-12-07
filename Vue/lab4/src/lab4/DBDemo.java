package lab4;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import lab4.DBUtil;

public class DBDemo {
	public static void main(String args[]) throws ClassNotFoundException {
		// ����DBUtil����
		String insertSql = "insert into Product (Product_Code, Description, Price) values(?,?,?)";
		DBUtil db = new DBUtil();
		Connection conn = null;
		try {
		
			conn = db.getConnection();
			// ��ȡ�����Զ��ύ״̬
			boolean autoCommit = conn.getAutoCommit();
		
			System.out.println("�����Զ��ύ״̬��" + autoCommit);
			if (autoCommit) {
				// �ر��Զ��ύ,��������
				conn.setAutoCommit(false);
			}
			
			Statement stmt = conn.createStatement();
			// ����DML���������
			
			//stmt.executeUpdate("insert into Product(Product_Code, Description, Price) values('ip','2018',2599)");
			//	stmt.executeUpdate("insert into Product(Product_Code, Description, Price) values('Toaster','Media',780)");
			//stmt.executeUpdate("insert into Product(Product_Code, Description, Price) values('Dryer','Flyco',180)");
			//System.out.println("���ӳɹ�");

			stmt.execute("update Product set Price=Price - 10  where Product_Coded = 'Toaster'");
			stmt.execute("update Product set Price=Price + 10  where Product_Code = 'Dryer'");
			System.out.println("�޸ĳɹ���");
			// ���˳��ִ�����ڴ��ύ
			conn.commit();
			// �ָ�ԭ�������ύ״̬
			conn.setAutoCommit(autoCommit);
			// �ر�����
			db.closeAll();
		} catch (Exception e) {
			// �����쳣
			if (conn != null) {
				try {
					// �ع�
				
					conn.rollback();
					System.out.println("����ع���");
				} catch (SQLException se) {
					se.printStackTrace();
				}
			}
			//e.printStackTrace();
		}
}
}