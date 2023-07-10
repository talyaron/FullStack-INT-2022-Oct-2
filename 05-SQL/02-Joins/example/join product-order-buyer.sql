select buyers.name, products.product_name, orders.order_id, products.product_price from products_in_order 
inner join orders on orders.order_id=products_in_order.order_id 
inner join products on products_in_order.product_id=products.product_id 
inner join buyers on orders.customer_id_fk=buyers.buyer_id;

-- comment --
 
select * from products_in_order 
inner join orders on orders.order_id=products_in_order.order_id 
inner join products on products_in_order.product_id=products.product_id 
inner join buyers on orders.customer_id_fk=buyers.buyer_id
where products.product_name like '%shirt%';