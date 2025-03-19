export default interface Article {
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  likeCount: number;
  categoryName: string;
}
