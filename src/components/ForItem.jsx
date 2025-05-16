import Download from "./Download";

export default function ForItem({ book }) {
  // 조건부 분기

  // if문은 구문이지 식이 아니기 때문에 JSX식에 직접 삽입할 수 없다.
  // let icon;
  // if(book.download) return <Download slug={book.slug} />;

  return (
    <>
      <dt>
        <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
          {book.title} ({book.price}원)
        </a>
      </dt>
      <dd>
        {book.summary}
        {/*

        
        if문을 JSX식에서 직접 사용할 수는 없지만, 즉시 함수를 사용하여 if문을 의사적으로 JSX식에 삽일할 수는 있다.
        정의한 함수를 그 자리에서 즉시 실행하기 때문에 즉시 함수라고 한다.
        */}
        {/* (() => {
          if (book.download) return <Download slug={book.slug} />;
        })() */}
        {book.download && <Download slug={book.slug} />}
      </dd>
    </>
  );
}
