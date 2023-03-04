import AddPostHeader from './AddPostHeader';
import PostEditor from './PostEditor';
import PostPreview from './PostPreview';
import { Area, Areas, Divide, WriteGlobalStyle } from './styles';
import useAddPost from './useAddPost';

export default function AddPost() {
  const addPostHooks = useAddPost();

  return (
    <>
      <WriteGlobalStyle />

      <div>
        <AddPostHeader
          onBack={addPostHooks.onBack}
          onThumbnail={addPostHooks.onThumbnail}
          onAddPost={addPostHooks.onAddPost}
        />

        <Areas>
          <Area className="content" style={addPostHooks.leftLand}>
            <PostEditor
              category={addPostHooks.category}
              title={addPostHooks.title}
              body={addPostHooks.body}
              tags={addPostHooks.tags}
              onChangeCategory={addPostHooks.onChangeCategory}
              onChangeTitle={addPostHooks.onChangeTitle}
              onChangeBody={addPostHooks.onChangeBody}
              onChangeTags={addPostHooks.onChangeTags}
              onUpload={addPostHooks.onUpload}
            />
          </Area>

          <Divide
            style={addPostHooks.divideLand}
            onMouseDown={addPostHooks.onDivideMouseDown}
          />

          <Area className="preview" style={addPostHooks.rightLand}>
            <PostPreview
              category={addPostHooks.category}
              title={addPostHooks.title}
              body={addPostHooks.body}
              thumbnail={addPostHooks.thumbnail}
              tags={addPostHooks.tags}
            />
          </Area>
        </Areas>
      </div>
    </>
  );
}
