function Error({ title, refetch }: { title: string; refetch: () => void }) {
  return (
    <div className="text-center text-red-600">
      <p>Oops! Couldn’t load {title}.</p>
      <button onClick={refetch} className="underline text-sm">
        Retry
      </button>
    </div>
  );
}

export default Error;
