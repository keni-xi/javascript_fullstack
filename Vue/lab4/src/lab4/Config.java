package lab4;
import java.io.FileInputStream;
import java.util.Properties;
//������
public class Config {
	private static Properties p = null;
	static {
		try {
			p = new Properties();
			// ���������ļ�
			p.load(new FileInputStream("Config/mysql.properties"));
			System.out.println("���������");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	// ��ȡ����Ӧ��ֵ
	public static String getValue(String key) {
		System.out.println("��ֵ��Ӧ��ȡ��ȷ");
		return p.get(key).toString();
	
	}
}
