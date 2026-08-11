import type { Product } from "@/data/products";

export function ProductSpecifications({ product }: { product: Product }) {
  const hasSpecs = Boolean(product.specifications?.length);
  const hasTable = Boolean(product.sizeTable?.rows.length);

  if (!hasSpecs && !hasTable) {
    return (
      <div className="rounded-[var(--radius)] border border-dashed border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
        <h3 className="font-display text-2xl">Specifications</h3>
        <p className="mt-2 text-sm text-[var(--brand-muted)]">
          Detailed technical specifications for this product can be added here once
          confirmed by the manufacturing team.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {hasSpecs ? (
        <div>
          <h3 className="font-display text-2xl">Specifications</h3>
          <dl className="mt-4 divide-y divide-[var(--brand-border)] border-y border-[var(--brand-border)]">
            {product.specifications!.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-sm font-medium text-[var(--brand-muted)]">{row.label}</dt>
                <dd className="sm:col-span-2 text-sm text-[var(--brand-ink)]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {hasTable ? (
        <div>
          <h3 className="font-display text-2xl">Available sizes & packing</h3>
          <div className="mt-4 overflow-x-auto rounded-[var(--radius)] border border-[var(--brand-border)]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[var(--brand-surface)]">
                <tr>
                  {product.sizeTable!.columns.map((column) => (
                    <th
                      key={column}
                      className="px-4 py-3 font-semibold text-[var(--brand-ink)]"
                      scope="col"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.sizeTable!.rows.map((row, index) => (
                  <tr key={index} className="border-t border-[var(--brand-border)]">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-[var(--brand-ink)]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-[var(--brand-muted)]">
            IB / OB refers to inner / outer box packing quantities as listed in the
            existing product catalogue.
          </p>
        </div>
      ) : null}
    </div>
  );
}
