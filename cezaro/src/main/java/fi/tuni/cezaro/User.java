package fi.tuni.cezaro;

import javax.persistence.*;

/**
 * Entity class that is used to define and save username and password in database.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
@Entity
@Table(name = "Userx")
public class User {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true)
    private String userName;

    private String password;

    /**
     * Basic empty constructor
     */
    public User(){
    }

    /**
     * Constructor with all class attributes.
     *
     * @param userName String of Username.
     * @param password String of password.
     */
    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    /**
     * Method for getting entity ID.
     *
     * @return id of entity as long.
     */
    public long getId() {
        return id;
    }

    /**
     * Method for setting entity ID.
     *
     * @param id for setting entity ID.
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Method for getting Entity Username.
     *
     * @return Entity Username as String.
     */
    public String getUserName() {
        return userName;
    }

    /**
     * Method for setting Entity Username.
     *
     * @param userName String to set Username.
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * Method for getting Entity Password.
     *
     * @return Entity Password as String.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Method for setting Entity password.
     *
     * @param password String to set password.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Override method for getting Entity attributes as String.
     *
     * @return String of Entity Attributes
     */
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
