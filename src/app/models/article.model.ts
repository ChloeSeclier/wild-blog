export default interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  likeCount: number;
  categoryName: string;
  isLiked: boolean;
}
