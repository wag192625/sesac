package com.example.demo.myjpasite;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceJpa {
    private final PostRepositoryJpa postRepositoryJpa;

    public PostServiceJpa(PostRepositoryJpa postRepositoryJpa) {
        this.postRepositoryJpa = postRepositoryJpa;
    }

    public PostJpa createPost(PostJpa post) {
        return postRepositoryJpa.save(post);
    }

    public List<PostJpa> readPost() {
        return postRepositoryJpa.findAll();
    }
    public PostJpa readPostById(Long id ) {
        return postRepositoryJpa.findById(id)
                .orElseThrow(() -> new IllegalIdentifierException("없는 Post입니다."));
    }

    public PostJpa updatePost(Long id, PostJpa updatedPost) {
        PostJpa post = postRepositoryJpa.findById(id)
                .orElseThrow(() -> new IllegalIdentifierException("없는 Post입니다."));

        String title = updatedPost.getTitle();
        String content = updatedPost.getContent();

//        post.update(title, content);
//        postRepositoryJpa.save(post);

        return postRepositoryJpa.save(post.update(title, content));
    }
}
