package com.example.demo.mysite.postMVC;

import com.example.demo.mysite.Post;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

public class PostRepository {
   List<Post> posts = new ArrayList<>();
   private Long id = 0L; // 게시글 생성에서 id 생성을 위한 장치


   // 저장. create 그 자체
   public Post save(Post newPost) {
//        String title = newPost.getTitle();
//        String content = newPost.getTitle();
//
//        Post post = new Post(++id, title, content);

       Post post = new Post(++id, newPost.getTitle(), newPost.getContent());
       posts.add(post);
       return post;
   }

   // 전체 게시글 읽기
   public List<Post> findAll() {
       return posts;
   }

   // 단일 게시글 읽기
   public Post findById(Long id) {
       for (Post post : posts) {
           if (post.getId().equals(id)) {
               return post;
           }
       }
       return null;
   }

   // 수정
   public Post modify(Long id, Post updatedPost) {
       String newTitle = updatedPost.getTitle();
       String newContent = updatedPost.getContent();

       for (Post post : posts) {
           if (post.getId().equals(id)) {
               post.setTitle(newTitle);
               post.setContent(newContent);
               return post;
           }
       }
       return updatedPost;
   }

   // 삭제.
   public void delete(Post post) {
       posts.remove(post);
   }
}
