--user 테이블 생성 쿼리
CREATE TABLE USER_INFO (
    SEQ INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USER_EMAIL VARCHAR(50) NOT NULL,
    USER_NAME VARCHAR(50) NOT NULL,
    USER_PW VARCHAR(50) NOT NULL
);


--user_info 테이블의 user_pw 컬럼 길이 변경
alter table USER_INFO modify column USER_PW varchar(100);