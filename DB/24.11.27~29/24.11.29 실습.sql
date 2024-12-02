-- Active: 1732689745176@@127.0.0.1@3306@sakila
-- 1. 배우가 출연한 영화의 제목을 조회
SELECT f.title, a.first_name,a.last_name FROM actor a
LEFT JOIN film_actor fa on a.actor_id = fa.actor_id
LEFT JOIN film f on fa.film_id = f.film_id;

-- 2. first_name이 `PENELOPE` 인 배우가 출연한 영화의 제목을 조회
SELECT f.title, a.first_name,a.last_name FROM actor a
LEFT JOIN film_actor fa on a.actor_id = fa.actor_id
LEFT JOIN film f on fa.film_id = f.film_id
WHERE a.first_name = 'PENELOPE';

-- 3. 영화 별 출연 배우의 수를 조회
SELECT f.title, COUNT(a.actor_id) 출연배우수 FROM film f
LEFT JOIN film_actor fa on f.film_id = fa.film_id
LEFT JOIN actor a on fa.actor_id = a.actor_id
GROUP BY f.title
ORDER BY `출연배우수` DESC;

-- 4. 영화 별 출연 배우의 수가 5가 넘는 데이터를 배우의 수가 큰순으로 조회
SELECT f.title, COUNT(a.actor_id) `출연배우수` FROM film f
LEFT JOIN film_actor fa on f.film_id = fa.film_id
LEFT JOIN actor a on fa.actor_id = a.actor_id
GROUP BY f.title
HAVING `출연배우수` > 5
ORDER BY `출연배우수` DESC;


-- ---

-- 1. 고객의 대여 정보 조회
SELECT c.first_name, c.last_name, r.rental_id, r.rental_date, r.return_date FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id


-- 1. 고객이 대여한 영화 정보 조회
SELECT c.first_name, c.last_name, f.title FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id
LEFT JOIN inventory i on r.inventory_id = i.inventory_id
LEFT JOIN film f on i.film_id = f.film_id


-- 1. `ACADEMY DINOSAUR` 영화를 대여한 고객 정보 조회
SELECT c.first_name, c.last_name, f.title FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id
LEFT JOIN inventory i on r.inventory_id = i.inventory_id
LEFT JOIN film f on i.film_id = f.film_id
WHERE f.title = 'ACADEMY DINOSAUR'


-- ---

-- 1. 배우별로 출연한 영화의 등급(rating)을 조회
SELECT a.first_name,a.last_name, rating FROM actor a
LEFT JOIN film f on a.actor_id = f.film_id
GROUP BY a.actor_id;

-- 1. 1번 고객이 자주 대여한 영화의 카테고리를 찾으시오
SELECT c.customer_id, f.film_id,f.title, COUNT(f.film_id) FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id
LEFT JOIN inventory i on r.inventory_id = i.inventory_id
LEFT JOIN film f on i.film_id = f.film_id
left join film_category fc on f.film_id = fc.film_id
left join category ca on fc.category_id = ca.category_id
WHERE c.customer_id = 1
GROUP BY f.film_id
LIMIT 1

-- 1. 각 직원이 일하는 매장의 주소와 도시를 조회
SELECT staff.staff_id,
staff.first_name,
staff.last_name,
store.store_id,
address.address, city.city FROM staff
left JOIN store on staff.store_id = store.store_id
left join address on store.address_id = address.address_id
left join city on address.city_id = city.city_id;


-- 1. 고객별로 대여한 영화 제목과 지불한 금액, 날짜를 조회
SELECT c.customer_id, f.title,f.rental_duration,r.rental_date FROM customer c
LEFT JOIN rental r on c.customer_id = r.customer_id
LEFT JOIN inventory i on r.inventory_id = i.inventory_id
LEFT JOIN film f on i.film_id = f.film_id
-- GROUP BY c.customer_id

-- 1. 국가별 고객 수를 조회
SELECT country.country 국가, COUNT(customer.customer_id) 고객_수 FROM country
LEFT JOIN city on country.country_id = city.country_id
LEFT JOIN address on city.city_id = address.city_id
LEFT JOIN customer on address.address_id = customer.address_id
GROUP BY country.country_id
ORDER BY 고객_수 DESC