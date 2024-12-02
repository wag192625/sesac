-- Active: 1732689745176@@127.0.0.1@3306@sakila
SELECT c.first_name, c.last_name, r.rental_date, r.return_date FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id
ORDER BY c.last_name

-- 고객 정보 조회
  -- 고객의 기본 정보, 주소 조회
SELECT c.first_name, c.last_name, a.address FROM customer c
INNER JOIN address a on c.address_id = a.address_id;

  -- 고객의 기본 정보, 주소, 도시 조회
SELECT c.first_name,c.last_name,a.address,city.city FROM customer c
INNER JOIN address a on c.address_id = a.address_id
INNER JOIN city on a.city_id = city.city_id;

  -- 고객의 기본 정보, 주소, 도시, 국가 조회
SELECT c.first_name,c.last_name,a.address,city.city, country.country FROM customer c
INNER JOIN address a on c.address_id = a.address_id
INNER JOIN city on a.city_id = city.city_id
INNER join country on country.country_id = city.city_id;

  -- London(city)에 사는 고객의 기본 정보, 주소, 도시 조회
SELECT c.first_name, c.last_name, a.address,city.city FROM customer c
INNER JOIN address a on c.address_id = a.address_id
INNER JOIN city on a.city_id = city.city_id
WHERE city.city = 'London'

  -- 도시별 고객 수 조회
SELECT city.city, COUNT(c.customer_id) FROM customer c
INNER JOIN address a on c.address_id = a.address_id
INNER JOIN city on a.city_id = city.city_id
GROUP BY city.city

---
-- 배우-영화 정보
  -- 배우가 출연한 영화 조회
SELECT a.first_name, a.last_name, f.title
FROM actor a
LEFT JOIN film_actor fa ON a.actor_id = fa.actor_id
LEFT JOIN film f ON fa.film_id = f.film_id;


SELECT a.first_name, a.last_name, f.title
FROM film f
LEFT JOIN film_actor fa ON f.film_id = fa.film_id
LEFT JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE fa.actor_id is null;

SELECT * FROM film f
LEFT JOIN film_actor fa on f.film_id = fa.film_id
WHERE fa.actor_id is null;


  -- 배우별 출연 영화 수
-- SELECT * FROM

  -- 영화의 카테고리 정보
SELECT f.title, c.name FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id

  -- 카테고리별 영화 수
SELECT c.name, COUNT(f.film_id) FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
GROUP BY c.category_id

 -- 배우가 출연한 영화를 카테고리 포함 조회
SELECT a.first_name, a.last_name, f.title
FROM actor a
LEFT JOIN film_actor fa ON a.actor_id = fa.actor_id
LEFT JOIN film f ON fa.film_id = f.film_id
LEFT JOIN film_category fc on f.film_id = fc.film_id
left JOIN category c on fc.film_id = c.category_id