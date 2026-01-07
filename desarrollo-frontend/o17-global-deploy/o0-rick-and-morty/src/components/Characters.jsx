const Characters = ({ data }) => {
  return (
    <section class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((character) => {
            const { id, name, status, species, gender, image } = character;
            return (
              <div class="col" key={id}>
                <div class="card shadow-sm">
                  <img
                    src={image}
                    alt={name}
                    class="card-img-top object-fit-cover"
                    height="225"
                  />
                  <div class="card-body">
                    <p class="card-text">{name} - {gender}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          {status}
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          {species}
                        </button>
                      </div>
                      <small
                        class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default Characters;
