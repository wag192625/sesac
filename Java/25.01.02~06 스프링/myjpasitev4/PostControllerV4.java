package com.example.demo.myjpasitev4;

import com.example.demo.myjpasitev4.dto.PostCreateRequestDto;
import com.example.demo.myjpasitev4.dto.PostListResponseDto;
import com.example.demo.myjpasitev4.dto.PostResponseDto;
import com.example.demo.myjpasitev4.dto.PostUpdateRequestDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jpa/v4/posts")
@RequiredArgsConstructor
public class PostControllerV4 {
    private final PostServiceV4 postServiceV4;

    // ExceptionHandler
//    @ExceptionHandler(ResourceNotFoundException.class)
//    public ResponseEntity<ApiResponse<Void>> handleResourceNotFound(ResourceNotFoundException ex) {
//       return ResponseEntity
//                .status(HttpStatus.NOT_FOUND)
//               .body(ApiResponse.error("resoure not found", "NOT_FOUND"));
//               .body(ApiResponse.error(ex.getMessage(), "not_found"));
//   }


    @PostMapping
    public ResponseEntity<ApiResponse<PostResponseDto>> cratePost(@Valid @RequestBody PostCreateRequestDto requestDto) {
//        return postServiceV4.createPost(requestDto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        ApiResponse.ok(
                                "게시글이 정상적으로 작성됨",
                                "CREATED",
                                postServiceV4.createPost(requestDto)
                        )
                );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<PostListResponseDto>>> readPosts() {
//        return postServiceV4.readPosts();
       List<PostListResponseDto> data = postServiceV4.readPosts();
       ApiResponse<List<PostListResponseDto>> response = ApiResponse.ok(data);

        return ResponseEntity.ok(response);
    }
//
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<PostResponseDto>> readPostById(@PathVariable Long id) {

        return ResponseEntity.ok(ApiResponse.ok(postServiceV4.readPostById(id)));
//        return postServiceV4.readPostById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<PostResponseDto>> updatePost(@PathVariable Long id, @RequestBody PostUpdateRequestDto requestDto) {
       return ResponseEntity.ok(ApiResponse.ok(postServiceV4.updatePost(id, requestDto)));
//        return postServiceV4.updatePost(id, requestDto);
    }

    @DeleteMapping("/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postServiceV4.deletePost(id);
        return ResponseEntity.noContent().build();
    }


}
