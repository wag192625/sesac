package com.example.demo.myjpasitev4.exeptions;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException() {
        super("리소스를 찾을 수 없습니다.");
    }

}
