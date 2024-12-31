package com.example.demo.mysite.postMVC;

import com.example.demo.mysite.Post;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mvc/posts")
public class PostController {
   PostService postService = new PostService();

   // create
   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
   public Post createPost(@RequestBody Post newPost) {
       return postService.createPost(newPost);
   }

   // read - 전체
   @GetMapping
   public List<Post> readPost() {
       return postService.readPosts();
   }

   // read - 단일
   @GetMapping("/id")
   public Post readPostById(@PathVariable Long id) {
       return postService.readPostById(id);
   }

   @PutMapping("/{id}")
   public Post UpdatePost(@PathVariable Long id, @RequestBody Post updatedPost) {
       return postService.updatePost(id, updatedPost);
   }

   // delete
   @DeleteMapping("/id")
   @ResponseStatus(HttpStatus.NO_CONTENT)
   public void deletePost(@PathVariable Long id) {
       postService.deletePost(id);
   }
}
