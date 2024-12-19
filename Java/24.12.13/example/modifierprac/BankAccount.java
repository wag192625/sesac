package org.example.modifierprac;

public class BankAccount {
    private int accountbalance ;
    private int password ;

    // 계좌 생성(생성자)
    public BankAccount(int password) {
        this.password = password;
    }

//    // 계좌 생성
//    public void CreateAcount(int password) {
//        this.password = password;
//    }

    // 입금
    public void Deposit(int accountbalance) {
        if (accountbalance <= 0) {
            System.out.println("don't deposit");
        } else {
            this.accountbalance += accountbalance;
            System.out.println(accountbalance + "입금");
        }
    }

    // 출금
    public void Withdrawal(int password, int accountbalance) {
        if (password == this.password) {
            if(accountbalance> this.accountbalance) {
                System.out.println("no money");
            } else {
                this.accountbalance -= accountbalance;
                System.out.println(accountbalance + "출금");
            }
        } else {
            System.out.println("check password");
        }
    }

    // 잔액 조회
    public void Checkbalance(int password) {
        if (password == this.password) {
            System.out.println("your money : " + this.accountbalance);
        } else {
            System.out.println("check password");
        }
    }

//    public int getAccountbalance() {
//        return accountbalance;
//    }
//
//    public void setAccountbalance(int accountbalance) {
//        this.accountbalance = accountbalance;
//    }

//    public int getPassword() {
//        return password;
//    }
//
//    public void setPassword(int password) {
//        this.password = password;
//    }
}
